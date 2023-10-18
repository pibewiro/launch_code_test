/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../../Components/HomeComponents/HeaderComponent";
import { QuickQuoteForm } from "../../Components/HomeComponents/QuickQuoteForm";
import { PendingQuotesComponent } from "../../Components/HomeComponents/PendingQuotesComponent";
import { QuotesContext } from "../../Services/Quote/QuotesProvider";
import { Grid } from "@mui/material";
import { ICreateQuote, IGetQuotes } from "../../Services/Quote/IQuotes";
import { ContactContext } from "../../Services/Contact/ContactProvider";
import { IGetContact } from "../../Services/Contact/IContact";
const mockContactId = "13823d7d-4ed3-41e1-a424-08a9e2b80a76";
const Home = () => {
  const initValues: ICreateQuote = {
    from: "",
    destinationLocation: "",
    departureLocation: "",
    departDate: "",
    returnDate: "",
    numberTravellers: "",
    contactId: "",
    transportation: "",
  };
  const { getQuotes, createQuote } = useContext(QuotesContext);
  const { getContact } = useContext(ContactContext);

  const [quotesData, setQuotesData] = useState<IGetQuotes[]>([]);
  const [contactData, setContactData] = useState<IGetContact>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    id: "",
  });
  const [quoteForm, setQuoteForm] = useState<ICreateQuote>(initValues);

  const handleGetQuotes = async () => {
    setQuotesData([]);
    const data = await getQuotes();
    setQuotesData(data);
  };

  const handleGetContact = async () => {
    const data = await getContact(mockContactId);
    setContactData(data);
  };

  const handleQuoteForm = async () => {
    await createQuote({
      ...quoteForm,
      contactId: mockContactId,
    });
    setQuoteForm(initValues);
    handleGetQuotes();
  };

  useEffect(() => {
    handleGetQuotes();
    handleGetContact();
  }, []);

  return (
    <Grid container spacing={3} sx={{ backgroundColor: "#f9f9fa" }}>
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={6}>
        <QuickQuoteForm
          form={quoteForm}
          setForm={setQuoteForm}
          name={contactData.firstName}
          handleQuoteForm={handleQuoteForm}
        />
      </Grid>
      <Grid item xs={6}>
        <PendingQuotesComponent quotes={quotesData} />
      </Grid>
    </Grid>
  );
};

export default Home;
