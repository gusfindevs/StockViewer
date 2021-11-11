import { useState, useCallback } from 'react';
import { IDailyQuotes } from '../interfaces';
import { StocksService } from '../services/StocksService';

export const useDailyData = (ticker: string, date: string) => {
  const [quotes, setQuotes] = useState<IDailyQuotes[]>([]);

  const getDailyQuotes = useCallback(async () => {
    const { status, data } = await StocksService.getTickerDailyData(
      ticker,
      date,
    );

    if (status !== 200) throw new Error();

    setQuotes(data);
  }, [ticker, date]);

  return {
    quotes,
    getDailyQuotes,
  };
};
