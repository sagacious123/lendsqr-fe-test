export interface PaginatedPayload {
    page?: number, 
    query?: string, 
    limit?: number
}

export interface PaginatedResponseData {
    next_page: null | string | number;
    current_page: number;
    last_page: number;
    current_pagesize: number;
    total: number;
}