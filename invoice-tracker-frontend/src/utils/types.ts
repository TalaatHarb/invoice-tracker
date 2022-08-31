// types used

export interface IForgotPasswordBody {
  email: string
}

export interface IResetPasswrodBody {
  resetToken: string
  password: string
}

export interface IMessageBar {
  type: string
  message: string
}

export class MessageBar implements IMessageBar {
  public type: string
  public message: string

  constructor(type: string, message: string) {
    this.type = type
    this.message = message
  }
}
