export class AccessDeniedError extends Error {
  constructor() {
    super('AccessDenied')
    this.name = 'AccessDenied'
    this.message = 'errors.accessDenied'
  }
}
