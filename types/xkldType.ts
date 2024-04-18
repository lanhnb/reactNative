export interface xkldType {
    _id: string;
    namex: string;
    categoryx: string;
    companyx: string;
    descriptionx: string;
    reviewsx: number;
    timex: string;
    starsx: number;
    salaryx: string;
    infox: string;
    image: Image[];
    video: Image[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface Image {
    public_id: string;
    url: string;
  }