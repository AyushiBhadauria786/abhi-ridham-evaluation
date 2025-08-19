import { vi } from "vitest";

const useApi = <T>(url: string) => {
    return {
        data: [
            {id: 1, category: "Groceries"},
            {id: 2, category: "Rent"},
        ] as T,
        error: null,
        loading: false,
        refetch: vi.fn(),
    };
};

export default useApi;