import {Stakeholder} from "./stakeholder.model";
import {PackageItemDTO} from "./item.model";

// models.ts
export interface DeliveryDTO {
  projectId: number;
  route: string; // Include the route field
  destination: string; // Include the destination field
  delivery_method: string;
  notes: string; // Include the notes field
  stakeholderId: number; // Include the stakeholderId field
  packageTypeId: number; // Include the packageTypeId field
}

export interface PackageDTO {
  packageType?: PackageTypeDTO;
  stakeholderId: number;
}

export interface PackageTypeDTO {
  id: number;
  notes: string;
  name: string;
  items: PackageItemDTO[];
}

export interface Delivery {
  id: number;
  date: string;
  status: string;
  route: string;
  destination: string;
  delivery_method: string;
  notes: string;
  packages: Package[];
}

export interface Package {
  id: number;
  packageType: PackageTypeDTO;
  stakeholder: Stakeholder;
}


export interface CreatePackageDTO {
  stakeholderId: string;
  packageTypeId: string;
  deliveryId: string;
}

// package-add.dto.ts

export interface PackageAddDTO {
  selectedPackageTypeId: string;
  selectedDeliveryId: string;
  stakeholderId: string;
}

