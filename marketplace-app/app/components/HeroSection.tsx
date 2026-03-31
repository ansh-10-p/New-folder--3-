"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { Button_v4 } from "@/components/Button_v4"
import { FadeText } from "@/components/FadeText"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl bg-gradient-to-br from-background to-muted/30">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_600px] items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col justify-center space-y-6 py-12"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-xs font-semibold w-fit"
              >
                <Zap className="mr-1 h-3 w-3" />
                Creative Marketplace
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <FadeText
                  text="We design digital experiences that people love"
                  direction="in"
                  wordDelay={0.12}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  containerClassName="gap-2"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Our award-winning team crafts beautiful, functional designs that drive growth and engagement.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row items-start"
            >
              <Button_v4 size="lg" className="rounded-3xl group">
                Get Started
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Button_v4>
              <Button_v4 variant="outline" size="lg" className="rounded-3xl">
                View Our Work
              </Button_v4>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
