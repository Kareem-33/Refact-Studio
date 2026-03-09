import ProjectForm from '../components/common/ProjectForm'
import ContactBanner from '../components/sections/ContactBanner'
import ProjectSubmission from '../components/sections/ProjectSubmission'
import PageHeader from '../components/ui/PageHeader'

const StartProject = () => {
  return (
    <div>
      <PageHeader
        label="START A PROJECT"
        title="Tell us about your project"
        subtitle="Share your idea or existing system details, and we’ll help you define the best next steps."
      />
      <div className='p-[120px] space-y-[30px] w-full h-fit'>
        <h2 className='text-3xl font-medium'>Project information</h2>
        <div className='flex gap-[80px] items-stretch'>
          <ProjectForm className="flex-1" />
          <div className='flex-1'>
            <img src="/images/projects/snail-store.png" alt="" className='w-full h-full object-cover rounded-[10px]' />
          </div>
        </div>
      </div>
      <ProjectSubmission />
      <ContactBanner type='contact'/>
    </div>
  )
}

export default StartProject