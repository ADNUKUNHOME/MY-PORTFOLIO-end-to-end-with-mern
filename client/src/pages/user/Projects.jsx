import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const Projects = () => {
  return (
    <div className="flex flex-col w-full min-h-screen p-5">
      <div className="flex flex-col w-full">
        <Card>
          <CardContent className='flex w-full h-[400px] shadow-xl'>
            <img src='' alt="" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex shadow-xl pt-5 mb-5 items-center justify-between'>
            <HoverCard>
              <HoverCardTrigger>
                <Button className='bg-sky-800 dark:bg-red-900 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[12px] md:text-sm'>TITLE HERE</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Button className='bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Technologies Used</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Button className='bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Details</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Button className='bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Preview Now</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>


          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Projects
