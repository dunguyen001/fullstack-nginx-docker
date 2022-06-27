import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_LIMIT } from "../constants";
import { IPagination } from "../types";

export class Pagination {
  page: number;
  limit: number;
  skip: number;

  constructor(pagination?: IPagination) {
    this.page = pagination?.page || DEFAULT_PAGE_INDEX;
    this.limit = pagination?.limit;
    this.skip = this.limit ? (this.page - 1) * this.limit : 0;
  }

  calculatePrevNext(count) {
    const { page, limit } = this;

    return {
      prevPage: page > 1 ? page - 1 : null,
      nextPage: page * limit < count ? page + 1 : null,
    };
  }
}
