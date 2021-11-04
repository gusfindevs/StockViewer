import React, { useState } from 'react';
import { Container } from './styles';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelector: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <Container>
      <DatePicker
        closeOnScroll={(e) => e.target === document}
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
      />
    </Container>
  );
};

export default DateSelector;
