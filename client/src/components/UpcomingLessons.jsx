import React from 'react'

const UpcomingLessons = () => {
  const lessons = [
    { date: '15 Aug', time: '10:00 AM', course: 'Introduction to Piano', student: 'Eunice Robel & Arnold Hayes' },
    { date: '16 Aug', time: '11:00 AM', course: 'Finger Warmups', student: 'Eunice Robel & Arnold Hayes' },
    { date: '17 Aug', time: '09:00 AM', course: 'Simple Chords', student: 'Eunice Robel & Arnold Hayes' },
    { date: '18 Aug', time: '02:00 PM', course: 'Rhythm Basics', student: 'Eunice Robel & Arnold Hayes' },
    { date: '19 Aug', time: '03:00 PM', course: 'Simple Melodies', student: 'Eunice Robel & Arnold Hayes' },
    { date: '20 Aug', time: '10:30 AM', course: 'Treble & Bass Clef', student: 'Eunice Robel & Arnold Hayes' }
  ]

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Lessons</h3>
        <a href="#" className="text-sm font-medium text-brand-purple hover:underline">View All</a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm">
              <th className="py-3 px-3 border-b border-gray-200">Date</th>
              <th className="py-3 px-3 border-b border-gray-200">Time</th>
              <th className="py-3 px-3 border-b border-gray-200">Course</th>
              <th className="py-3 px-3 border-b border-gray-200">Student Name</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={index} className="text-sm text-gray-800">
                <td className="py-3 px-3 border-b border-gray-100">{lesson.date}</td>
                <td className="py-3 px-3 border-b border-gray-100">{lesson.time}</td>
                <td className="py-3 px-3 border-b border-gray-100">{lesson.course}</td>
                <td className="py-3 px-3 border-b border-gray-100">{lesson.student}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UpcomingLessons 