
import { MapPin, Phone, Mail } from 'lucide-react';

const VenueLocation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-carnival-darkRed gradient-text">
          Grand Finale Venue
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-carnival-darkRed mb-4">National Grand Finale</h3>
              <p className="text-carnival-brown mb-4">31 Oct – 1 Nov • IIT Kharagpur</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-carnival-brown">
                  <MapPin className="w-5 h-5 mt-1 text-carnival-red shrink-0" />
                  <p className="leading-relaxed">
                    Indian Institute of Technology Kharagpur<br />
                    Kharagpur, West Bengal 721302
                  </p>
                </div>
                <div className="flex items-center gap-3 text-carnival-brown">
                  <Phone className="w-5 h-5 text-carnival-red shrink-0" />
                  <p>Event Helpline: To be announced</p>
                </div>
                <div className="flex items-center gap-3 text-carnival-brown">
                  <Mail className="w-5 h-5 text-carnival-red shrink-0" />
                  <p>contact@campusclash.in</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-carnival-darkRed mb-4">Getting There</h3>
              <ul className="space-y-3 text-carnival-brown">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-carnival-red/50" />
                  10 minutes from Hebbal
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-carnival-red/50" />
                  Near Baptist Hospital
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-carnival-red/50" />
                  Free parking available
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-carnival-red/50" />
                  Accessible by public transport
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[600px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="IIT Kharagpur Map"
              src="https://www.google.com/maps?q=IIT+Kharagpur&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;
