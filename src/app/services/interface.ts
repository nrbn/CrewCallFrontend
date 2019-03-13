export interface INote {
  general: Array<General>;
  personal: Array<Personal>;
}


export interface General {
  body: string;
  subject: string;
}

export interface Personal {
  body: string;
  subject: string;
}

export interface Jobs {
  opportunities?: [];
  interested?: [];
  confirm: [];
  assigned: [];
  confirmed?: [];
  signup_shift: SignUpShift;
  delete_interest: DeleteInterest;
  confirm_job: ConfirmJob;
  assigned_count: Number;
  confirmed_count: Number;
  opportunities_count: Number;
  interested_count: Number;
}

export interface SignUpShift {
  _csrf_token: string;
  url: string;
}

export interface DeleteInterest {
  _csrf_token: string;
  url: string;
}

export interface ConfirmJob {
  _csrf_token: string;
  url: string;
}
