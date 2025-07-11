import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { NavLink } from "react-router-dom";
import useApi from "../hooks/useApi";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  keywords: string[];
}

interface FAQSection {
  id: number;
  title: string;
  faqs: FAQ[];
}


const Faq = () => {
const { data: faqData, loading, error } = useApi<FAQSection[]>("/faqSections");
  const [filteredSections, setFilteredSections] = useState<FAQSection[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchFAQData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         "http://localhost:3001/faqSections"
  //       );
  //       setFaqData(response.data);
  //       setFilteredSections(response.data);
  //       setError(null);
  //     } catch (err) {
  //       console.error("Error fetching FAQ data:", err);
  //       setError("Failed to load FAQ data. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFAQData();
  // }, []);

  useEffect(() => {
    if (!faqData) {
      setFilteredSections([]);
      return;
    }

    if (!searchQuery.trim()) {
      setFilteredSections(faqData);
      return;
    }

    const query = searchQuery.toLowerCase().trim();

    const filtered = faqData
      .map((section) => {
        const filteredFAQs = section.faqs.filter((faq) => {
          const questionMatch = faq.question.toLowerCase().includes(query);
          const answerMatch = faq.answer.toLowerCase().includes(query);
          const keywordMatch = faq.keywords.some((keyword) =>
            keyword.toLowerCase().includes(query)
          );
          return questionMatch || answerMatch || keywordMatch;
        });

        return {
          ...section,
          faqs: filteredFAQs,
        };
      })
      .filter((section) => section.faqs.length > 0);
    setFilteredSections(filtered);
  }, [searchQuery, faqData]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return (
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: "24px" }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

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
          value={searchQuery}
          onChange={handleSearchChange}
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

      {/* No Results */}
      {searchQuery.trim() && filteredSections.length === 0 && (
        <Paper
          sx={{
            p: 3,
            mt: 4,
            borderRadius: 3,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No results found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try different keywords or browse through the sections below
          </Typography>
        </Paper>
      )}

      {/* FAQ Sections */}
      {filteredSections.map((section) => (
        <Paper
          key={section.id}
          sx={{
            p: 2,
            mt: 4,
            borderRadius: 3,
            boxShadow: 2,
            borderColor: "rgb(218, 224, 231);",
          }}
          elevation={3}
        >
          <Typography variant="h6">{section.title}</Typography>
          <div>
            {section.faqs.map((faq) => (
              <Accordion key={faq.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    component="span"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                  >
                    {[faq.question]}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component="div">{[faq.answer]}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Paper>
      ))}

      {/* Contact Support Section */}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "rgb(51, 65, 85)",
            }}
          >
            Still have questions?
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "rgb(71, 85, 105)",
            }}
          >
            Can't find what you're looking for? We're here to help!
          </Typography>
          <NavLink
            to="/contact"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "rgb(71, 85, 105)",
              // textDecoration: "none",
            }}
          >
            Contact Support
          </NavLink>
        </Box>
      </Paper>
    </Box>
  );
};

export default Faq;
