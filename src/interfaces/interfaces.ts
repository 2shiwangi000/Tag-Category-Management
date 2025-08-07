export interface MetadataOption {
  label: string;
  value: string;
}

export interface MetadataConfigItem {
  component: string;
  key: string;
  label: string;
  type?: string;
  readOnly?: boolean;
  required?: boolean;
  mode?: string;
  multiple?: boolean;
  query?: string;
  options?: MetadataOption[];
}

export interface SubCategoryConfig {
  component: string;
  key: string;
  label: string;
  required?: boolean;
  type?: string;
  mode?: string;
  multiple?: boolean;
  options?: MetadataOption[];
  query?: string;
}

export interface SubCategories {
  [key: string]: {
    label: string;
    config: SubCategoryConfig[];
  };
}

export interface Group {
  label: string;
  value: string;
}

export interface ITagCategory {
  id: string;
  name: string;
  gameId: string;
  group: Group;
  status: string;
  precisionType: string;
  isParentTag: boolean;
  isReplay: boolean;
  metadataConfig: MetadataConfigItem[];
  subCategories: SubCategories;
  nameStructure: string[];
  createdAt: number;
  deleted: boolean;
}