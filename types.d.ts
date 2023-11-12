type Note = {
  id?: string;
  title: string;
  userId?: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  priority: string;
  color?: string | null;
};

type PreviewNote = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  priority: string;
  color?: string | undefined;
};
