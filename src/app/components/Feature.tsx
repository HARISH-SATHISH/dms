import React from 'react'

const Feature = () => {
    return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Benefits of our dairy
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <h1 className="text-green-500  font-bold text-2xl title-font  mb-2">Free Feed</h1>
                  <p className="leading-relaxed text-base">
                  Supporting registered farmers with complimentary cow feed, promoting sustainable practices and fostering thriving agricultural communities for a brighter future in farming
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <h1 className="text-green-500  font-bold text-2xl title-font  mb-2">Free Medicine</h1>
                  <p className="leading-relaxed text-base">
                  Providing registered farmers with free medicine, promoting livestock health, and fostering sustainable farming practices for a prosperous agricultural community.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <h1 className="text-green-500  font-bold text-2xl title-font  mb-2">Transperancy</h1>
                  <p className="leading-relaxed text-base">
                  Farmer-Friendly Dairy prioritizes transparent business practices with farmers. We ensure open communication, fair dealings,  for mutual success in dairy farming.
                  </p>
                </div>
              </div>
              {/* Other two similar div elements */}
            </div>
          </div>
        </section>
      );
}

export default Feature