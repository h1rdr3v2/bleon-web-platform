'use client'

import { CheckCircle, Target, Users, Zap } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Quality',
      description: 'We maintain the highest standards in all our deliverables and services.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from concept to execution.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedWrapper
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Bleon Co Ltd
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform businesses through technology, Bleon Co Ltd has been 
              at the forefront of digital innovation in Nigeria. We specialize in providing comprehensive 
              technology solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced professionals combines deep technical expertise with a deep 
              understanding of business needs. We've successfully delivered projects for clients across 
              various industries, from startups to established enterprises.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Values */}
          <AnimatedWrapper
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Our Core Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <AnimatedWrapper
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </AnimatedWrapper>
        </div>

        {/* Mission & Vision */}
        <AnimatedWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital marketplace.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology partner for businesses in Nigeria and beyond, 
              recognized for innovation, quality, and exceptional client success.
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}

export default About
