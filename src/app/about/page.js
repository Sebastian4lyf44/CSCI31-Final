'use client'

import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import Footer from '../footer';
import CardForm from '../components/CardForm';
import React, { useState } from 'react';
import Card from '../components/Card';
import { createClient } from '@supabase/supabase-js';



export default function About() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent>
          This Website is all about making the impossible turned possible; While making coding fun and Interactive and
          showing that hard work really does pay off.
        </PageContent>
        <CardForm onAddCard={addCard} />
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
