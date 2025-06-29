import { StaticImageData } from "next/image"

export interface User {
    _id: string,
    name: string,
    email: string,
  }

export interface Payload {
  email: string,
  name?: string,
  password: string,
  }

export interface ProjectData {
  id: number
  title: string
  skills: string[]
  description: string[]
  figma?: string
  isPrivate: boolean
  liveUrl?: string
  youtubeUrl?: string
  cardImage?: StaticImageData | string
  githubUrl?: string

}

export interface Task {
    id: number
    title: string,
    status: string,
    createdAt: string
}