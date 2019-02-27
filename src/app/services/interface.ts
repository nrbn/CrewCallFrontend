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
}
