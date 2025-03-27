import React, { useState } from "react";

const Watchlist = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  return (
    <main className="p-4 sm:p-6 md:p-10 lg:p-10 w-full min-h-screen overflow-hidden bg-zinc-100 pb-20 sm:pb-10">
      <div className="flex justify-between  items-center mb-4 mt-20">
        <div className="flex flex-col  gap-3">
          <div className="sm:w-32 sm:h-6 w-15 h-4 justify-start text-gray-700 text-lg font-bold font-['Helvetica'] leading-relaxed">
            Watchlist
          </div>
          <div className=" w-full break-words text-gray-700 text-opacity-50 text-xs sm:text-sm md:text-base font-medium font-['Poppins'] capitalize leading-tight sm:leading-snug">
            Review all your notifications and alerts, leverage insights and
            analytics.
          </div>
        </div>

        <div className="flex-column space-x-1 space-y-2 mt-5">
          <div className="px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5  overflow-hidden">
            <img className="w-4 h-4 " src="/icons/replay.svg" />
            <div className="text-right justify-start text-white sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Refresh
            </div>
          </div>

          <div className="px-4 py-2 bg-zinc-300 inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <img className="w-4 h-4 bg-zinc-300" src="/icons/visibility.svg" />
            <div className="text-right justify-start text-stone-900 sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Read all
            </div>
          </div>
        </div>
      </div>

      {/* Second section start here */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 lg:justify-start lg:w-fit sm:ml-0 ml-5">
        {/* Search Alerts */}
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-1">
          <img
            className="sm:w-6 sm:h-6 w-4 h-4 relative"
            src="/icons/search.svg"
          />
          <div className="justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Search Alerts...
          </div>
        </div>

        {/* Site Button */}
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-1">
          <img
            className="sm:w-6 sm:h-6 w-4 h-4 relative"
            src="/icons/location_on.svg"
          />
          <div className="justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Site
          </div>
          <div className="w-6 h-6 relative">
            <img
              className="w-6 h-6 left-10 relative"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Camera Button */}
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-1">
          <img
            className="sm:w-6 sm:h-6 w-4 h-4 relative"
            src="/icons/camera_video.svg"
          />
          <div className="justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Camera
          </div>
          <div className="w-6 h-6 relative">
            <img
              className="w-6 h-6 left-5 relative"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Office Button */}
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-4 gap-1">
          <img
            className="sm:w-6 sm:h-6 w-4 h-4 relative"
            src="/icons/event_list.svg"
          />

          <div className=" justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Office
          </div>
          <div className="w-6 h-6 relative">
            <img
              className="w-6 h-6 left-5 relative"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>
      </div>

      {/* Alerts Section start hete*/}
      <div className="mt-4">
        <div className="w-48 h-6 justify-start">
          <span class="text-gray-700 sm:text-lg text-sm font-bold font-['Poppins'] leading-relaxed">
            March 16th
          </span>
          <span class="text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            {" "}
            Monday
          </span>
        </div>

        <div className="grid grid-cols-4  pb-2 ">
          <div className="w-20 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Preview
          </div>
          <div className="w-16 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Date
          </div>
          <div className="w-32 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Title/Alert
          </div>
          <div className="sm:w-32 sm:h-6 w-16 h-4 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Site/Camera
          </div>
        </div>
      </div>

      {/* Big card Start here*/}

      <div className=" sm:p-5 p-3 w-full  mx-auto  bg-neutral-200 rounded-[30px]">
        <AlertItem />

        {/* video section is here*/}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
            {/* Image Section */}
            <div className="relative flex justify-center">
              <div className="relative rounded-md overflow-hidden aspect-video">
                <img
                  src="/icons/image 20.png"
                  alt="Camera footage"
                  className="w-full sm:w-[500px] md:w-[600px] lg:w-[698px] h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
                A pedestrian and a backpack were counted at office-camera101
                (16:58).
              </div>

              <div>
                {/* Alert & Count Section */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize">
                    Alert
                  </div>
                  <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize">
                    Count people
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-300 my-3" />

                {/* Camera Section */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize">
                    Camera
                  </div>
                  <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize">
                    Office-camera101
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row justify-between p-3 space-y-3 md:space-y-0">
            {/* Left Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="px-4 py-2 w-full sm:w-36 h-12 flex items-center justify-center bg-white border border-black border-opacity-50">
                <img
                  className="w-4 h-4"
                  src="/icons/download.svg"
                  alt="Download"
                />
                <span className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize ml-2">
                  Download
                </span>
              </button>

              <button className="px-4 py-2 w-full sm:w-52 h-12 flex items-center justify-center bg-white border border-black border-opacity-50">
                <img
                  className="w-4 h-4"
                  src="/icons/theaters.svg"
                  alt="Theaters"
                />
                <span className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize ml-2">
                  Open Sequence
                </span>
              </button>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex  gap-2.5 overflow-hidden  items-center justify-center "
                onClick={() => setIsShareModalOpen(true)}
              >
                <img className="w-6 h-6" src="/icons/share.svg" alt="Share" />
                <span className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                  Share Recording
                </span>
              </button>

              <button
                className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex  gap-2.5 overflow-hidden  items-center justify-center "
                onClick={() => setIsAddTaskModalOpen(true)}
              >
                <img className="w-6 h-6" src="/icons/add.svg" alt="Add" />
                <span className="text-white text-base font-medium font-['Poppins'] ml-2">
                  Add Task
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-b border-gray-300 my-3" />
        </div>
        <div className="w-full space-y-4">
          <AlertItem />
          <AlertItem />
          <AlertItem />
          <AlertItem />
        </div>

        {/* Share task code start here */}
        {isShareModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50  sm:p-6">
            <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-[844px] max-h-[90vh] bg-neutral-200 rounded-[20px] p-4 sm:p-6 relative shadow-lg border border-gray-200 overflow-y-auto">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => setIsShareModalOpen(false)}
              >
                <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
              </button>

              {/* Title */}
              <div className="text-gray-700 text-lg sm:text-xl font-bold leading-7">
                Share recording
              </div>

              {/* Description */}
              <div className="text-gray-700 text-opacity-50 text-sm sm:text-base font-medium leading-tight mt-2 sm:mt-4">
                By sharing this recording, a public link is generated,
                accessible by any external parties who receive this link. You
                can specify the sharing duration until the public link is
                disabled.
              </div>

              {/* Grid layout for content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* Left Column: Share Details */}
                <div>
                  <div className="text-gray-700 text-opacity-50 text-lg sm:text-xl font-medium leading-7">
                    Share details
                  </div>

                  {/* Title Input */}
                  <div className="mt-2">
                    <label className="text-gray-700 text-base font-medium">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white rounded-lg p-2 text-gray-700 text-sm"
                      placeholder="Name"
                    />
                  </div>

                  {/* Notes Input */}
                  <div className="mt-4">
                    <label className="text-gray-700 text-base font-medium">
                      Notes
                    </label>
                    <textarea
                      className="w-full h-16 bg-white rounded-lg p-2 text-gray-700 text-sm"
                      placeholder="Provide a short description..."
                    ></textarea>
                  </div>

                  {/* Details Box */}
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Camera</span>
                      <span className="text-black text-opacity-50">
                        office-camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-zinc-300 my-2" />
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Sites</span>
                      <span className="text-black text-opacity-50">
                        office-camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-zinc-300 my-2" />
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Date/Time</span>
                      <span className="text-black text-opacity-50">
                        April 16, Tuesday 20:04:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Recipients */}
                <div>
                  <div className="text-gray-700 text-opacity-50 text-lg sm:text-xl font-medium leading-7">
                    Recipients
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700 text-sm">
                      Following persons will receive a notification and access
                      to the shared recording.
                    </p>

                    <div className="w-full h-12 bg-white rounded-lg flex items-center p-2 mt-3">
                      <input
                        type="email"
                        className="w-full bg-transparent text-gray-700 text-sm outline-none"
                        placeholder="Write email and press enter..."
                      />
                    </div>

                    <div className="mt-4 p-4 w-full bg-white rounded-lg flex flex-col items-center">
                      <div className="text-gray-700 text-sm font-semibold">
                        No recipients
                      </div>
                      <p className="text-gray-700 text-opacity-50 text-sm text-center">
                        To add a recipient, submit an email address in the above
                        input field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-4">
                <button
                  className="w-full sm:w-52 h-12 px-4 py-2 rounded-md flex items-center justify-center bg-white border border-black border-opacity-50"
                  onClick={() => setIsShareModalOpen(false)}
                >
                  <img
                    className="w-5 h-5 mr-2"
                    src="/icons/cancel.svg"
                    alt="Cancel"
                  />
                  <span className="text-gray-700 text-sm">Cancel & Close</span>
                </button>

                <button className="w-full sm:w-52 h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 flex items-center justify-center text-white rounded-md">
                  <img
                    className="w-6 h-6 mr-2"
                    src="/icons/share.svg"
                    alt="Share"
                  />
                  <span className="text-base font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Modal code start here*/}

        {isAddTaskModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-6">
            <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-neutral-200 rounded-2xl p-4 sm:p-6 relative shadow-lg border border-gray-200 overflow-y-auto max-h-[90vh] ">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => setIsAddTaskModalOpen(false)}
              >
                <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
              </button>

              {/* Title */}
              <h2 className="w-40 h-6 justify-start text-gray-700 text-xl font-bold font-['Helvetica'] leading-7">
                Add Task
              </h2>

              {/* Description */}
              <p className=" justify-start text-gray-700 text-opacity-50 text-sm font-medium font-['Poppins'] capitalize leading-tight mt-2">
                Tasks are a great way to save specific media for further
                analysis and share it with others by email or publicly. They can
                be used to review various incidents (theft, injuries, etc.) and
                other significant moments.
              </p>

              {/* Task Details & Recipients (Grid Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Left Column: Task Details */}
                <div>
                  <h3 className="text-gray-700 text-opacity-50 text-lg font-medium">
                    Task Details
                  </h3>

                  <div className="mt-4">
                    <label className="text-gray-700 text-sm font-medium">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white rounded-lg p-2 mt-1 text-gray-700 text-sm"
                      placeholder="Enter task name"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-700 text-sm font-medium">
                      Notes
                    </label>
                    <textarea
                      className="w-full h-20 bg-white rounded-lg p-2 mt-1 text-gray-700 text-sm"
                      placeholder="Provide a short description..."
                    ></textarea>
                  </div>

                  {/* Camera, Sites, Date/Time Section */}
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Camera</span>
                      <span className="text-gray-400 text-sm">
                        Office-Camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-gray-300 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Sites</span>
                      <span className="text-gray-400 text-sm">
                        Office-Camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-gray-300 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Date/Time</span>
                      <span className="text-gray-400 text-sm">
                        April 16, Tuesday 20:04:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Recipients */}
                <div>
                  <h3 className="text-gray-700 text-opacity-50 text-lg font-medium">
                    Recipients
                  </h3>

                  <div className="mt-4 p-4 bg-white rounded-lg">
                    {/* Search Bar */}
                    <div className="flex items-center space-x-2">
                      <img
                        className="w-6 h-6"
                        src="/icons/search.svg"
                        alt="Search"
                      />
                      <input
                        type="text"
                        className="w-full bg-transparent text-gray-700 text-sm outline-none"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="w-full h-px bg-gray-300 mt-2"></div>

                    {/* Recipient List */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-x-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-400"
                        />
                        <img
                          className="w-6 h-6"
                          src="/icons/account_circle.svg"
                          alt="User Icon"
                        />
                        <span className="text-gray-700 text-sm">Glenn</span>
                      </div>
                      <span className="text-gray-400 text-sm">Editor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  className="w-full h-12 md:w-auto px-6 py-2 bg-white border border-gray-400  flex items-center justify-center space-x-2"
                  onClick={() => setIsAddTaskModalOpen(false)}
                >
                  <img
                    className="w-5 h-5"
                    src="/icons/cancel.svg"
                    alt="Cancel"
                  />
                  <span className="text-gray-700 text-sm">Cancel & Close</span>
                </button>

                <button className="w-full md:w-auto h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 overflow-hidden  space-x-2">
                  <img className="w-6 h-6" src="/icons/add.svg" alt="Add" />
                  <span className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                    Share
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Watchlist;

function AlertItem() {
  return (
    <div className="w-full bg-white rounded-lg sm:p-3.5 p-2 flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* Image Section */}
        <div className="flex justify-center sm:justify-start">
          <div className="rounded-md overflow-hidden relative">
            <img
              src="/icons/image 19.png"
              alt="Camera footage thumbnail"
              className="w-full sm:w-52 h-28 rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Date & Time Section */}
        <div className="space-y-2 flex flex-col items-center sm:items-start">
          <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            April 16th 2024,
          </div>
          <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            16:59:29
          </div>
        </div>

        {/* Description Section */}
        <div className="lg:col-span-2 space-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug sm:w-auto w-full">
            A pedestrian and a backpack were counted at office-camera101
            (16:58).
          </div>
          <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            Count people
          </div>
        </div>
      </div>
    </div>
  );
}
