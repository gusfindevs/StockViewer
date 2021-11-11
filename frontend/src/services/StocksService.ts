import { IDailyQuotes } from '../interfaces';
import { marketData } from '../providers';

const getTickerDailyData = (ticker: string, date: string) =>
  marketData.get<IDailyQuotes[]>(`/marketdata/?ticker=${ticker}&date=${date}`);

export const StocksService = { getTickerDailyData };
