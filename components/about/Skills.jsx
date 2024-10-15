import { Code, Server, Database, Braces, Globe, ScrollText  } from 'lucide-react'

const skills = [
  { name: 'JavaScript', level: 95, icon: Code },
  { name: 'React.js', level: 85, icon: Braces },
  { name: 'TailwindCSS', level: 90, icon: ScrollText },
  { name: 'TypeScript', level: 80, icon: Code },
  { name: 'Next.js', level: 80, icon: Braces },
  { name: 'Node.js', level: 90, icon: Server },
  { name: 'MongoDb', level: 65, icon: Database },
  { name: 'Python', level: 60, icon: Globe },
  { name: 'Django', level: 55, icon: Server },
  { name: 'PostgreSQL', level: 65, icon: Database },
]
export default function Skills(){
    return (
        <div className="mt-10 sm:mt-20">
             <section className="py-16 bg-transparent transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
                    </div>
                    <p className="text-center mb-12 max-w-2xl text-gray-600 dark:text-gray-300">
                        Explore my technical expertise across various web technologies and programming languages.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div 
                        key={skill.name} 
                        className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                        <skill.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">{skill.name}</h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                            <div
                            className="h-2.5 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                            style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}