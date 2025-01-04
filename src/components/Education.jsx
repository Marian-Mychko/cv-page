import { motion } from 'framer-motion';
import { EDUCATIONS } from '../constants';

const Education = () => {
    const educationVariants = {
        hidden: {
            opacity: 0, scale: 0.8, rotate: -40, y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
                type: 'spring',
                bounce: 0.4,
            }
        }
    }

    return (
        <section className="px-6 py-10 scroll-mt-20" id="utdanning">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
            Utdanning
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EDUCATIONS.map((education, index) => (
                    <motion.div 
                    key={index}
                    className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={educationVariants}>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
    
                        {/* Image */}
                        <img 
                        src={education.image}
                        alt={education.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
    
                        {/* Text */}
                        <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                        <h2 className="text-2xl font-medium mb-4">{education.name}</h2>
                        <div className="flex flex-col justify-between">
                            <p className="mb-4 flex-grow text-2xl">{education.description}</p>
                            <a href={education.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center">
                                Les mer
                            </a>
                        </div>
                        </div>
                    </motion.div>
                ))}
                </div>
        </section>
    )
}

export default Education