import { notFound } from 'next/navigation';

export default function ReviewDetail({
  params,
}: {
  params: {
    productId:string;
    reviewId: string;
  };
}) {

  if(parseInt(params.reviewId) > 100){
    notFound();
  }
  return <h2>Review {params.reviewId} of Product {params.productId}</h2>;
}
