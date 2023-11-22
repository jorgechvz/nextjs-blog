export type DateProps = {
  dateString: string;
};

export type PostType = {
  id: string;
  [key: string]: any;
};

export type PostIdType = {
  params: {
    id: string;
  };
};

export type PostDataType = {
  title: string;
  date: string;
  contentHtml: string;
};

export type PostPropsType = {
  postData: PostDataType;
};

export type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
}
