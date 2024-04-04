"use client"
import { React, useState } from "react";
import Image from "next/image";
import logo2 from "../public/img/pnn.png";

function ReviewSentiment() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentiment, setSentiment] = useState("");
  const [review, setReview] = useState("");

  async function handlesubmit() {
    //display the modal
    // http://127.0.0.1:5000/sentiment
    setIsLoading(true);

    const response = await fetch("http://localhost:5000/sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: review }),
    });

    const data = await response.json();
    setSentiment(data.sentiment);
    setIsLoading(false);

    const modal = document.getElementById("popup-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  //when okay button is clicked of modal the modal should be hidden
  function handlemodal() {
    const modal = document.getElementById("popup-modal");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
  return (
    <div>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter the review
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      {
        sentiment === "Best" && (
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span class="block sm:inline">The customer had {sentiment} exprince</span>
          </div>
        )
      }
      {
        sentiment === "Good" && (
          <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span class="block sm:inline">The customer had {sentiment} exprince</span>
          </div>
        )
      }
      {
        sentiment === "Neutral" && (
          <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span class="block sm:inline">The customer had {sentiment} exprince</span>
          </div>
        )
      }
      {
        sentiment === "Bad" && (
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span class="block sm:inline">The customer had {sentiment} exprince</span>
          </div>
        )
      }

      {
        sentiment === "Worst" && (
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span class="block sm:inline">The customer had {sentiment} exprince</span>
          </div>
        )
      }
      <button
        type="submit"
        onClick={handlesubmit}
        class="w-100 mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>


      {/* Modal */}

      <div
        id="popup-modal"
        tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={handlemodal}
              type="button"
              disabled={isLoading}
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <Image src={logo2} alt="close" width={20} height={20} />
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                The sentiment of the review is {sentiment}
              </h3>
              <button
                onClick={handlemodal}
                data-modal-hide="popup-modal"
                type="button"
                class="text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSentiment;
