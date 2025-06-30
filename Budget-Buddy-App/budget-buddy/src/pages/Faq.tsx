import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: 400,
          mt: "16px",
        }}
      >
        Find answers to common questions about using FinanceFlow
      </Typography>

      <Paper
        sx={{ p: 3, mt: 4, borderRadius: 3, boxShadow: 3, display: "flex" }}
      >
        <TextField
          placeholder="Search FAQ..."
          type="search"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Paper>

      <Paper
        sx={{
          p: 2,
          mt: 4,
          borderRadius: 3,
          boxShadow: 2,
          borderColor: "rgb(218, 224, 231);",
        }}
        elevation={3}
      >
        <Typography variant="h6">Getting Started</Typography>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{ "&hover": { textDecoration: "underline" } }}
              >
                How do I create my first budget category?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Navigate to the 'Budget' page from the sidebar menu. In the 'Add
              New Category' section, enter a category name (like 'Groceries')
              and set a monthly budget limit. Click 'Add Category' to save it.
              You can then use this category when adding transactions.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                What's the difference between income and expense transactions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Income transactions represent money coming into your account
              (salary, freelance work, etc.) and are displayed in green. Expense
              transactions represent money going out (purchases, bills, etc.)
              and are displayed in red. Select the appropriate type when adding
              a transaction.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                How do I add my first transaction?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Go to 'Add Transaction' in the sidebar. Choose whether it's an
              income or expense, enter the amount, select a category, add a
              description, and set the date. Click 'Add Transaction' to save it
              to your history.
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mt: 4,
          borderRadius: 3,
          boxShadow: 2,
          borderColor: "rgb(218, 224, 231);",
        }}
        elevation={3}
      >
        <Typography variant="h6">Managing Transactions</Typography>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{ "&hover": { textDecoration: "underline" } }}
              >
                Can I edit or delete transactions after adding them?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes! Go to the 'Transactions' page where you'll see all your
              transactions in a table. Each row has Edit and Delete buttons in
              the Actions column. Click Edit to modify transaction details or
              Delete to remove it completely.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                How do I search for specific transactions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              On the Transactions page, use the search and filter tools at the
              top. You can search by description, filter by transaction type
              (income/expense), category, or date range. This helps you quickly
              find specific transactions.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                What happens if I don't categorize a transaction?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              While categories are helpful for budgeting and reporting, you can
              add transactions without categories. However, we recommend always
              selecting a category to get the most accurate budget tracking and
              reports.
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mt: 4,
          borderRadius: 3,
          boxShadow: 2,
          borderColor: "rgb(218, 224, 231);",
        }}
        elevation={3}
      >
        <Typography variant="h6">Budget Management</Typography>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{ "&hover": { textDecoration: "underline" } }}
              >
                How do budget limits work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Budget limits help you control spending in each category. When you
              spend money in a category, it's tracked against your monthly
              limit. The dashboard shows progress bars - green means you're
              within budget, orange means you're close to the limit, and red
              means you've exceeded it.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                Can I change my budget limits during the month?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes, you can modify budget limits anytime in the Budget page.
              Click the Edit button next to any category to update the monthly
              limit. This is useful if your spending needs change.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                What happens when I delete a budget category?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              When you delete a category, the category itself is removed, but
              all transactions associated with it remain in your history. Those
              transactions become 'uncategorized' and won't count toward any
              budget limits.
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mt: 4,
          borderRadius: 3,
          boxShadow: 2,
          borderColor: "rgb(218, 224, 231);",
        }}
        elevation={3}
      >
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 1}}>
          <Typography sx={{fontSize: "18px", fontWeight: 600, color: "rgb(51, 65, 85)"}}>Still have questions?</Typography>
          <Typography sx={{fontSize: "16px", fontWeight: 400, color: "rgb(71, 85, 105)"}}>
            Can't find what you're looking for? We're here to help!
          </Typography>
          <Typography sx={{fontSize: "16px", fontWeight: 500, color: "rgb(71, 85, 105)"}}>Contact Support</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Faq;
