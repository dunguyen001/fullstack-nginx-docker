export const ok = (resp, data) => resp.json({ ok: true, data });

export const badRequest = (resp, message, data = undefined) =>
  resp.status(400).json({ ok: false, message, data });

export const validationError = (resp, reasons) =>
  badRequest(resp, 'Validation error', reasons);

export const unauthorized = (resp) =>
  resp.status(401).json({ ok: false, message: 'Unauthorized' });

export const forbidden = (resp, message = null) =>
  resp.status(403).json({ ok: false, message: message || 'Forbidden' });

export const notFound = (resp, modelName) =>
  resp.status(404).json({ ok: false, message: `${modelName} not found` });

export const unprocessable = (resp, message = 'Unprocessable') =>
  resp.status(422).json({ ok: false, message });

export const serverError = (resp) =>
  resp.status(500).json({ ok: false, message: 'Internal server error' });
