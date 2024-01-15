import { PackageTypeDTO } from './delivery.model';

export interface CreateItemDTO {
  name: string;
  description: string;
  image: File; // Multer file object
  projectId: number;
  quantity: number;
}

export interface ItemDTO {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
}

export interface PackageItemDTO {
  id: number;
  item: ItemDTO;
  packageType: PackageTypeDTO;
  notes: string;
}
