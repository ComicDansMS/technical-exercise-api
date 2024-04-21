import { Request } from "express";
import { SearchQuery } from "../types/searchQuery.js";

export default function parseQueryParams(req: Request): SearchQuery {
  const queryParams: SearchQuery = {
    title: getStringQueryParam(req.query.title),
    genres: getStringArrayQueryParam(req.query.genre),
    years: getNumberArrayQueryParam(req.query.year),
  }
  
  return queryParams;
}

function getStringQueryParam(param: any): string {
  if (!param) return null;

  if (typeof param === 'string') {
    return param;
  }

  throw new Error('Invalid query parameter type for a string');
}

function getStringArrayQueryParam(param: any): string[] {
  try {
    if (!param) return [];

    const preparedParam = param.replace(/'/g, '"');
    const array: string[] = JSON.parse(preparedParam).map((p: string) => getStringQueryParam(p));
    return array;

  } catch (error) {
    throw new Error('Invalid query parameter type for a string array');
  }
}

function getNumberArrayQueryParam(param: any): number[] {
  try {
    if (!param) return [];
  
    const array: number[] = JSON.parse(param).map((p: string) => parseInt(p));
    const filtered = array.filter(num => !isNaN(num));
    return filtered;

  } catch (error) {
    throw new Error('Invalid query parameter type for a number array');
  }
}
