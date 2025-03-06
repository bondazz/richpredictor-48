
import React from 'react';
import MainLayout from '../layout/MainLayout';

const Partners = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-richgray-800 mb-6">Our Partners</h1>
            <div className="prose prose-lg">
              <p>We collaborate with leading organizations in the sports industry to provide the best possible service to our users.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-12">
                {/* Partner logos would go here */}
                <div className="flex items-center justify-center p-6 border border-richgray-100 rounded-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-richgray-100 mx-auto rounded-full mb-4"></div>
                    <p className="font-medium">Partner 1</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border border-richgray-100 rounded-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-richgray-100 mx-auto rounded-full mb-4"></div>
                    <p className="font-medium">Partner 2</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border border-richgray-100 rounded-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-richgray-100 mx-auto rounded-full mb-4"></div>
                    <p className="font-medium">Partner 3</p>
                  </div>
                </div>
              </div>
              <p>Interested in partnering with us? Contact us for more information.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;
