export interface Review {
  id: number;
  reviewerName: string;
  reviewerAvatarUrl?: string;
  rating: number;
  comment: string;
  date: Date | string;
}