// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:26:28.723Z
// Section: about
// Category: about
// Template ID: about-c001
// Page: About
// Component: About

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function InvoicelyAbout() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to empowering small and medium-sized businesses with a modern, user-friendly invoicing solution."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of invoicing technology, bringing cutting-edge features to your fingertips."
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description: "Your success is our success. We build every feature with our users' needs and goals at the center."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From startups to enterprises, we're helping businesses worldwide transform their invoicing and billing processes."
    }
  ]

  const stats = [
    { value: "2019", label: "Founded", icon: Award },
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
    { value: "25+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      bio: "Former VP of Product at TechCorp. 15+ years building scalable invoicing solutions."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      image: "MC",
      bio: "Ex-Google engineer. Expert in distributed systems and web performance optimization."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      bio: "Award-winning designer with experience at top design agencies. Passionate about user-centric design."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "DK",
      bio: "Former Meta engineer. Passionate about developer experience and building powerful, scalable tools."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Invoicely
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming the Way
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Businesses Invoice
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team on a mission to make invoicing and billing 
            accessible, powerful, and enjoyable for small and medium-sized businesses.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, Invoicely was born out of a frustration with the 
                complexity and outdated nature of traditional invoicing solutions.
              </p>
              <p>
                After years of struggling with clunky interfaces, limited features, 
                and poor user experiences, we knew there had to be a better way.
              </p>
              <p>
                Today, we're proud to serve over 50,000 businesses worldwide, 
                helping them streamline their invoicing and billing processes 
                with a modern, user-friendly platform.
              </p>
            </div>
            <Button className="group">
              Read Our Full Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Invoicely has completely transformed how we manage our invoicing and billing. It's a game-changer!"
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Jessica Davis, CTO, TechStartup Inc.</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The talented individuals behind Invoicely, working together to build something amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Invoicely has completely transformed how we approach invoicing and billing. 
                What used to take us days now takes just a few clicks, and the results are consistently professional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">CTO, TechStartup Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}