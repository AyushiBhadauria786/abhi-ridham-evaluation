import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { describe, expect, it, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../redux/authSlice'
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from "react-redux";


// ---Mocks---

vi.mock('../pages/Home', () => ({default: () => <div>HomePageMock</div> }))
vi.mock('../pages/Login', () => ({default: () => <div>LoginPageMock</div> }))
vi.mock('../pages/signup/Signup', () => ({default: () => <div>SignupPageMock</div> }))
vi.mock('../pages/Dashboard', () => ({default: () => <div>DashboardPageMock</div> }))
vi.mock('../pages/NotFound', () => ({default: () => <div>NotFoundPageMock</div> }))
vi.mock('../layouts/FullLayout', () => ({
    default: () => (
        <div>
            FullLayoutMock
            <Outlet />
        </div>
    )
}))

vi.mock("./components/ProtectedRoutes", () => ({
  default: () => {
    const { user } = useSelector((state) => state.auth);
    return user ? <Outlet /> : <div>Redirected to Login</div>;
  },
}));vi.mock('../components/AuthRoute', () => ({default: () => <Outlet />}))

vi.mock('../firebase/firebase',() => ({
    auth: {}
}));
vi.mock("firebase/auth", () => ({
  onAuthStateChanged: vi.fn(() => () => {}), // Must return a mock unsubscribe function
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual, 
    BrowserRouter: ({ children }) => <>{children}</>,
  };
});

import { MemoryRouter, Outlet } from "react-router-dom";

const renderWithProviders = (
    initialState = {},
    initialRoute = "/"
) => {
    const store = configureStore({
        reducer: {
            auth: authSliceReducer,
        },
        preloadedState: initialState,
    });

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <App />
            </MemoryRouter>
        </Provider>
    )
}


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})

describe("App Component Routing", () => {
    it("should show a loading spinner if auth is not initialized", () => {
        renderWithProviders({auth: {user: null, isAuthInitialized: false } });
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    })
})


describe("for unauthenticated users", () => {
    const unauthenticatedState = {
      auth: { user: null, isAuthInitialized: true },
    };

    it("should render the Login page for the /login route", () => {
      renderWithProviders(unauthenticatedState, "/login");
      expect(screen.getByText("LoginPageMock")).toBeInTheDocument();
    });

    it("should render the Signup page for the /signup route", () => {
      renderWithProviders(unauthenticatedState, "/signup");
      expect(screen.getByText("SignupPageMock")).toBeInTheDocument();
    });
    
    it("should render the Home page for the /home route", () => {
      renderWithProviders(unauthenticatedState, "/home");
      expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    });

    it("should NOT render the Dashboard for a protected route", () => {
      renderWithProviders(unauthenticatedState, "/dashboard");
      expect(screen.queryByText("DashboardPageMock")).not.toBeInTheDocument();
    //   expect(screen.getByText("Redirected to Login")).toBeInTheDocument();
    });
  });

   describe("for authenticated users", () => {
    const authenticatedState = {
      auth: {
        user: { id: "123", fullName: "Test User", email: "test@test.com" },
        isAuthInitialized: true,
      },
    };

    // it("should render the Dashboard for the /dashboard route", () => {
    //   renderWithProviders(authenticatedState, "/dashboard");
    //   expect(screen.getByText("FullLayoutMock")).toBeInTheDocument();
    //   expect(screen.getByText("DashboardPageMock")).toBeInTheDocument();
    // });

    // it("should redirect from / to /dashboard", async () => {
    //   renderWithProviders(authenticatedState, "/");
    //   await waitFor(() => {
    //     expect(screen.getByText("DashboardPageMock")).toBeInTheDocument();
    //   });
    // });

    it("should render the NotFound page for a non-existent route", () => {
      renderWithProviders({ auth: { isAuthInitialized: true } }, "/some/bad/route");
      expect(screen.getByText("NotFoundPageMock")).toBeInTheDocument();
    });
  });

  


