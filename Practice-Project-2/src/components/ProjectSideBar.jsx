import Button from './Button';

function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 text-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project, index) => {
          let cssClass =
            'text-stone-400 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            cssClass += ' bg-stone-800 text-stone-200';
          }

          return (
            <li key={project.id} className="mt-4">
              <button
                onClick={() => onSelectProject(project.id)}
                className={`w-full text-left  px-2 py-1 rounded-sm my-1 ${cssClass}`}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default ProjectSideBar;
