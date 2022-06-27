export enum USER_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum ACCOUNT_TYPE {
  USER = 'user',
  SYS_ADMIN = 'sys_admin',
}

export enum SCHEDULE_STATUS {
  WORK = 'work',
  WAIT_FOR_LEAVE = 'wait_for_leave',
  LEAVE = 'accept_for_leave',
  REJECT_FOR_LEAVE = 'reject_for_leave',
}

export const REGEX_EXTRACT_TOKEN = /^Bearer\s+(.+)$/i;

export const DEFAULT_PAGE_LIMIT = 20;
export const DEFAULT_PAGE_INDEX = 1;


export const ERRORS = {
  NOT_FOUND: "Không tìm thấy thông tin vui lòng kiểm tra lại",
  LEAVE_REQUEST_IS_APPROVED: "Đơn nghỉ phép đã được xử lý không thể chỉnh sửa hoặc xóa",
}