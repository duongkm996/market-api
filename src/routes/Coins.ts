import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import axios from "axios";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export const getList = async (req: Request, res: Response) => {
  const { per_page, page } = req.query;
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page,
          order: "market_cap_desc",
          page,
          sparkline: true,
          price_change_percentage: "1h,24h,7d",
        },
      }
    );
    return res.status(OK).json({
      status: 200,
      result: result.data,
    });
  } catch (error: any) {
    return res.status(OK).json({
      status: 400,
      result: error,
    });
  }
};

export const getGlobal = async (req: Request, res: Response) => {
  try {
    const result = await axios.get("https://api.coingecko.com/api/v3/global");
    return res.status(OK).json({
      status: 200,
      result: result.data.data,
    });
  } catch (error: any) {
    return res.status(OK).json({
      status: 400,
      result: error,
    });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/categories/list"
    );
    return res.status(OK).json({
      status: 200,
      result: result.data,
    });
  } catch (error: any) {
    return res.status(OK).json({
      status: 400,
      result: error,
    });
  }
};

export const getDetail = async (req: Request, res: Response) => {
  try {
    const { coinId } = req.params;
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`
    );
    return res.status(OK).json({
      status: 200,
      result: result.data,
    });
  } catch (error: any) {
    return res.status(OK).json({
      status: 400,
      result: error,
    });
  }
};

export const getTrending = async (req: Request, res: Response) => {
  try {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    return res.status(OK).json({
      status: 200,
      result: result.data.coins,
    });
  } catch (error: any) {
    return res.status(OK).json({
      status: 400,
      result: error,
    });
  }
};
