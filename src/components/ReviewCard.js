import React from "react";
import { BsPerson } from "react-icons/bs";

const ReviewCard = ({ review, children }) => {
	const { reviewerPhoto, reviewerEmail, reviewerName, dateAdded, reviewText } = review;
	return (
		<div className="flex h-full flex-col justify-between rounded border bg-white p-4 shadow-md shadow-slate-500/10 md:p-8">
			<div className="mb-4">
				<p className="text-lg italic">{reviewText}</p>
			</div>
			<div className="">
				<div className="flex items-center gap-4">
					<div className="grid aspect-square h-14 w-14 place-content-center overflow-hidden rounded-full border-2 border-blue-900/50 flex-shrink-0">
						{reviewerPhoto ? (
							<img
								src={reviewerPhoto}
								alt=""
								className="h-full w-full object-cover"
							/>
						) : (
							<BsPerson className="text-2xl" />
						)}
					</div>
					<div>
						<h6 className="text-lg font-bold text-blue-900">
							{reviewerName ? reviewerName : "Unknown user"}
						</h6>
						<p className="text-sm">Review date: {dateAdded}</p>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default ReviewCard;
