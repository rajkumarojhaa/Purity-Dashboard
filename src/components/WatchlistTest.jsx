import React, { useState } from "react";

const WatchlistTest = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  return (
    <main className="p-4 sm:p-6 md:p-10 lg:p-15 w-full xl:w-[1920px] max-w-full  overflow-hidden bg-zinc-100 ">
      <div className="flex justify-between  items-center mb-4 mt-20">
        <div className="flex flex-col gap-1">
          <div className="sm:w-32 sm:h-6 w-15 h-4 justify-start text-gray-700 text-lg font-bold font-['Helvetica'] leading-relaxed">
            Watchlist
          </div>
          <div className=" w-full break-words text-gray-700 text-opacity-50 text-xs sm:text-sm md:text-base font-medium font-['Poppins'] capitalize leading-tight sm:leading-snug">
            Review all your notifications and alerts, leverage insights and
            analytics.
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="sm:px-4 sm:py-2 px-2 py-1 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center sm:gap-2.5 gap-0.5 overflow-hidden">
            <img className="w-4 h-4 " src="/icons/replay.svg" />
            <div className="text-right justify-start text-white sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Refresh
            </div>
          </div>

          <div className="sm:px-4 sm:py-2 px-2 py-1 bg-zinc-300 inline-flex justify-center items-center sm:gap-2.5 gap-0.5 overflow-hidden">
            <img className="w-4 h-4 bg-zinc-300" src="/icons/visibility.svg" />
            <div className="text-right justify-start text-stone-900 sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Read all
            </div>
          </div>
        </div>
      </div>
      

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4">
          <img className="sm:w-6 sm:h-6 w-4 h-4 relative " src="/icons/search.svg" />
          <div className="justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Search Alerts...
          </div>
        </div>

        {/* Site Button is here*/}
        <div className="lg:w-40 lg:h-10 w-30 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4">    
            <img
              className="sm:w-6 sm:h-6 w-4 h-4 relative"
              src="/icons/location_on.svg"
            />
          <div className="justify-start text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight">
            Site
          </div>
          <div className="w-6 h-6 relative ">
            <img
              className="w-6 h-6 left-10  relative "
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Camera Button is here*/}
        <div className="w-44 h-12 bg-zinc-300 rounded-3xl flex items-center px-4">
          <div className="w-6 h-6 relative mr-2 ml-2">
            <img
              className="w-4 h-4 left-[3px] top-[3px] absolute"
              src="/icons/camera_video.svg"
            />
          </div>
          <div className="justify-start text-gray-700 text-sm font-medium font-['Poppins'] capitalize leading-tight">
            Camera
          </div>
          <div className="w-6 h-6 relative ">
            <img
              className="w-6 h-6 left-8  absolute "
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Office Button is here*/}
        <div className="w-44 h-12 bg-zinc-300 rounded-3xl flex items-center px-4">
          <div className="w-6 h-6 relative mr-2">
            <img
              className="w-5 h-4 left-[2px] top-[3px] absolute "
              src="/icons/event_list.svg"
            />
          </div>
          <div className="w-16 justify-start text-gray-700 text-sm font-medium font-['Poppins'] capitalize leading-tight">
            camera
          </div>
          <div className="w-6 h-6 relative ">
            <img
              className="w-6 h-6 left-8  absolute "
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>
      </div>
      {/* Alerts Section start hete*/}
      <div className="mt-4">
        <div className="w-48 h-6 justify-start">
          <span class="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">
            March 16th
          </span>
          <span class="text-gray-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            {" "}
            Monday
          </span>
        </div>

        <div className="grid grid-cols-4  pb-2 ">
          <div className="w-28 h-6 justify-start text-gray-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Preview
          </div>
          <div className="w-16 h-6 justify-start text-gray-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Date
          </div>
          <div className="w-32 h-6 justify-start text-gray-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Title/Alert
          </div>
          <div className="sm:w-32 sm:h-6 w-16 h-4 justify-start text-gray-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Site/Camera
          </div>
        </div>
      </div>
      {/* Alert Items import here*/}
      <div className="space-y-4 p-10  w-full  mx-auto  bg-neutral-200 rounded-[30px]">
        <AlertItem />

        {/* Expanded Alert is here*/}
        <div className=" overflow-hidden">
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="relative">
              <div className="relative rounded-md overflow-hidden aspect-video">
                <img
                  src="/icons/image 20.png"
                  alt="Camera footage"
                  className="w-[698px] h-96 "
                />
              </div>
            </div>

            <div>
              <div className="w-[598px] h-5 justify-start text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
                A pedestrian and a backpack were counted at office-camera101
                (16:58).
              </div>

              <div>
                <div className="grid grid-cols-2 space-y-2 mt-5">
                  <div className="w-14 h-5 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                    Alert
                  </div>
                  <div className="w-28 h-5 justify-start text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
                    Count people
                  </div>
                </div>
                <div className="w-[844px] h-0  outline-[0.50px] outline-offset-[-0.25px] outline-black outline-opacity-50" />
                <div className="grid grid-cols-2 mt-5">
                  <div className="w-20 h-5 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                    Camera
                    <br />
                  </div>
                  <div className="w-36 h-5 justify-start text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
                    office-camera101
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-3 ">
            <div className="flex space-x-2">
              <div className="px-4 py-2 w-36 h-12 inline-flex justify-center items-center gap-2.5 bg-white border border-black border-opacity-50 ">
                <img className="w-4 h-4 " src="/icons/download.svg" />
                <div className="text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                  Download
                </div>
              </div>
              <div className="px-4 py-2 w-52 h-12 inline-flex justify-center items-center gap-2.5 bg-white border border-black border-opacity-50 ">
                <img className="w-4 h-4 " src="/icons/theaters.svg" />
                <div className="text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                  Open sequence
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 overflow-hidden rounded-md"
                onClick={() => setIsShareModalOpen(true)}
              >
                <img
                  className="w-6 h-6"
                  src="/icons/share.svg"
                  alt="Share Icon"
                />
                <div className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                  Share Recording
                </div>
              </button>

              <button
                className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 overflow-hidden rounded-md"
                onClick={() => setIsAddTaskModalOpen(true)}
              >
                <img className="w-6 h-6" src="/icons/add.svg" alt="Add Icon" />
                <div className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                  Add Task
                </div>
              </button>
            </div>
          </div>
          <div className="w-[1708px] h-0  outline-[0.50px] outline-offset-[-0.25px] outline-black outline-opacity-50" />
        </div>

        <AlertItem />
        <AlertItem />
        <AlertItem />
        <AlertItem />
      </div>

      {/* Share task open here */}
      {isShareModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[844px] max-h-screen bg-neutral-200 rounded-[20px] p-6 relative shadow-lg border border-gray-200 overflow-y-auto">
            {/* Close button code start here */}
            <button
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              onClick={() => setIsShareModalOpen(false)}
            >
              <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
            </button>

            <div className="w-40 h-6 justify-start text-gray-700 text-xl font-bold font-['Helvetica'] leading-7">
              Share recording
            </div>

            <div className="w-[730px] justify-start text-gray-700 text-opacity-50 text-sm font-medium font-['Poppins'] capitalize leading-tight mt-4">
              By sharing this recording, a public link is generated, accessible
              by any external parties who receive this link. You can specify the
              sharing duration until the public link is disabled.
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Left Column: Share Details start here */}
              <div>
                <div className="w-56 h-6 justify-start text-gray-700 text-opacity-50 text-xl font-medium font-['Poppins'] leading-7">
                  Share details
                </div>

                <div className="mt-4">
                  <div className="text-gray-700 text-base font-medium font-['Poppins'] leading-snug">
                    TITLE
                  </div>
                  <div className="w-96 h-16 bg-white rounded-lg flex justify-center items-center p-2">
                    <input
                      type="text"
                      className="text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-36 h-6 justify-start text-gray-700 text-base font-medium font-['Poppins'] leading-snug">
                    NOTES
                  </div>
                  <div className="w-96 h-16 bg-white rounded-lg flex items-center p-2">
                    <div className="w-72 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Provide a short description of what is happening, or why
                      you are sharing.
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 w-96 bg-white rounded-lg">
                  <div className="flex justify-between">
                    <div className="w-16 text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Camera
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      office-camera101
                    </div>
                  </div>
                  <div className="w-full h-px bg-zinc-300 my-2" />
                  <div className="flex justify-between">
                    <div className="w-16 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Sites
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      office-camera101
                    </div>
                  </div>
                  <div className="w-full h-px bg-zinc-300 my-2" />
                  <div className="flex justify-between">
                    <div className="w-20 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Date/Time
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      April 16, Tuesday 20:04:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Recipients code start here*/}
              <div>
                <div className="w-56 h-6 justify-start text-gray-700 text-opacity-50 text-xl font-medium font-['Poppins'] leading-7">
                  Recipients
                </div>

                <div className="mt-12">
                  <div className="w-96 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                    Following persons will receive a notification and receive
                    access to the shared recording.
                    <br />
                  </div>

                  <div className="w-96 h-16 bg-white rounded-lg flex items-center p-2 mt-15">
                    <div className="w-64 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Write email and press enter to submit.
                    </div>
                  </div>

                  <div className="mt-4 p-4 w-96 h-44 bg-white rounded-lg flex flex-col justify-center items-center">
                    <div className="w-32 h-5 text-center justify-start text-gray-700 text-sm font-semibold font-['Poppins'] capitalize leading-tight">
                      No recipients
                    </div>
                    <div className="w-80 text-center justify-start text-gray-700 text-opacity-50 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      To add a recipient, submit an email address in the above
                      input field.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons start here*/}
            <div className="mt-6 flex justify-between items-center px-4">
              <button
                className="w-52 h-12 px-4 py-2 rounded-md flex items-center space-x-2 bg-white border border-black border-opacity-50"
                onClick={() => setIsShareModalOpen(false)}
              >
                <img className="w-5 h-5" src="/icons/cancel.svg" alt="Cancel" />
                <span className="text-gray-700 text-sm font-normal font-['Poppins']">
                  Cancel & Close
                </span>
              </button>

              <button className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center  gap-2.5 overflow-hidden  items-center space-x-2 text-white ">
                <img className="w-6 h-6" src="/icons/share.svg" alt="Share" />
                <div className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                  Share
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Task Modal code start here*/}
      {isAddTaskModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[844px] max-h-screen bg-neutral-200 rounded-[20px] p-6 relative shadow-lg border border-gray-200 overflow-y-auto">
            {/* Close button code start here */}
            <button
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              onClick={() => setIsAddTaskModalOpen(false)}
            >
              <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
            </button>

            <div className="w-40 h-6 justify-start text-gray-700 text-xl font-bold font-['Helvetica'] leading-7">
              Add task
            </div>

            <div className="w-[730px] justify-start text-gray-700 text-opacity-50 text-sm font-medium font-['Poppins'] capitalize leading-tight  mt-4">
              Tasks are a great way to save specific Media for further analysis
              and/or share it with others by email or publicly. Tasks can be
              used to review various accidents (theft, injuries etc.) and other
              significant moments.
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Left Column: Task Details start here */}
              <div>
                <div className="w-56 h-6 justify-start text-gray-700 text-opacity-50 text-xl font-medium font-['Poppins'] leading-7">
                  Task details
                </div>

                <div className="mt-4">
                  <div className="w-28 h-6 justify-start text-gray-700 text-base font-medium font-['Poppins'] leading-snug">
                    TASK NAME
                  </div>
                  <div className="w-96 h-16 bg-white rounded-lg flex justify-center items-center p-2">
                    <input
                      type="text"
                      className="text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-36 h-6 justify-start text-gray-700 text-base font-medium font-['Poppins'] leading-snug">
                    NOTES
                  </div>
                  <div className="w-96 h-16 bg-white rounded-lg flex items-center p-2">
                    <div className="w-72 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Provide a short description of what is happening, or why
                      you are sharing.
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 w-96 h-48 bg-white rounded-lg">
                  <div className="flex justify-between">
                    <div className="w-16 text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Camera
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      office-camera101
                    </div>
                  </div>
                  <div className="w-full h-px bg-zinc-300 my-2" />
                  <div className="flex justify-between">
                    <div className="w-16 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Sites
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      office-camera101
                    </div>
                  </div>
                  <div className="w-full h-px bg-zinc-300 my-2" />
                  <div className="flex justify-between">
                    <div className="w-20 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Date/Time
                    </div>
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      April 16, Tuesday 20:04:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Recipients code start here*/}
              <div>
                <div className="w-56 h-6 justify-start text-gray-700 text-opacity-50 text-xl font-medium font-['Poppins'] leading-7">
                  Recipients
                </div>

                <div className="mt-4 p-4 w-96 h-48 bg-white rounded-lg">
                  <div className="flex space-x-2">
                    <img
                      className="w-6 h-6 relative  "
                      src="/icons/search.svg"
                      alt=""
                    />
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                      Search....
                    </div>
                  </div>

                  <div className="w-80 h-px bg-zinc-300 mt-2" />

                  <div className="flex items-center justify-between mt-2">
                    
                    <div className="flex items-center gap-x-2">
                      <div className="w-4 h-4 bg-white rounded border border-black border-opacity-50"></div>
                      <img
                        className="w-6 h-6"
                        src="/icons/account_circle.svg"
                        alt="User Icon"
                      />
                      <div className="text-center justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">Glenn</div>
                    </div>

                    
                    <div className="text-center justify-start text-black text-opacity-20 text-sm font-normal font-['Poppins'] capitalize leading-tight">Editer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons start here*/}
            <div className="mt-6 flex justify-between items-center px-4">
              <button
                className="w-52 h-12 px-4 py-2 rounded-md flex items-center space-x-2 bg-white border border-black border-opacity-50"
                onClick={() => setIsAddTaskModalOpen(false)}
              >
                <img className="w-5 h-5" src="/icons/cancel.svg" alt="Cancel" />
                <span className="text-gray-700 text-sm font-normal font-['Poppins']">
                  Cancel & Close
                </span>
              </button>

              <button className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center  gap-2.5 overflow-hidden  items-center space-x-2 text-white ">
                <img className="w-6 h-6" src="/icons/add.svg" alt="Add" />
                <div className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                  Share
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default WatchlistTest;

function AlertItem() {
  return (
    <div className="w-[1635px] h-44 bg-white rounded-lg p-4 flex  items-center">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className=" rounded-md overflow-hidden  relative">
            <img
              src="/icons/image 19.png"
              alt="Camera footage thumbnail"
              className="w-52 h-28 rounded-2xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-32 h-5 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            April 16th 2024,
          </div>
          <div className="w-32 h-5 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            16:59:29
          </div>
        </div>

        <div className="col-span-2 space-y-2">
          <div className="w-[598px] h-5 justify-start text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
            A pedestrian and a backpack were counted at office-camera101
            (16:58).
          </div>
          <div className="w-32 h-5 justify-start text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
            Count people
          </div>
        </div>
      </div>
    </div>
  );
}
