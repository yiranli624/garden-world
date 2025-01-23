"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const WEATHER_OPTIONS = [
  { name: "cold-weather", label: "Cold Weather" },
  { name: "cool-weather", label: "Cool Weather" },
  { name: "mild-weather", label: "Mild Weather" },
  { name: "warm-weather", label: "Warm Weather" },
  { name: "hot-weather", label: "Hot Weather" }
];
const DIFFICULTY_OPTIONS = [
  { name: "very-easy", label: "Very Easy" },
  { name: "easy", label: "Easy" },
  { name: "medium", label: "Medium" },
  { name: "difficult", label: "Difficult" },
  { name: "very-difficult", label: "Very Difficult" }
];

// const getCheckboxes = (options: "weather" | "difficulty") => {
//   const chosenOptions =
//     options === "weather" ? WEATHER_OPTIONS : DIFFICULTY_OPTIONS;
//   return chosenOptions.reduce<Record<string, { checked: boolean }>>(
//     (checkboxes, option) => {
//       checkboxes[option.name] = { checked: false };
//       return checkboxes;
//     },
//     {}
//   );
// };

export default function FiltersSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string, isChecked: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      isChecked ? params.append(name, value) : params.delete(name, value);
      params.sort();
      return params.toString();
    },
    [searchParams]
  );

  const hanelCheckboxOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    filterGroup: "weather" | "difficulty"
  ) => {
    router.push(
      pathname +
        "?" +
        createQueryString(
          `growing_${filterGroup}`,
          event.target.id,
          event.target.checked
        )
    );
  };

  return (
    <div className='flex flex-col flex-1 items-center py-6 gap-20 bg-beige'>
      <fieldset className='flex gap-10'>
        <legend className='mb-2'>Filter by Weather</legend>
        <ul className='w-full'>
          {WEATHER_OPTIONS.map((weatherOption) => (
            <li
              key={weatherOption.label}
              className='w-full h-8 p-2 flex gap-2 items-center'
            >
              <input
                id={weatherOption.name}
                name={weatherOption.name}
                type='checkbox'
                checked={searchParams
                  .getAll("growing_weather")
                  .includes(weatherOption.name)}
                onChange={(event) => hanelCheckboxOnChange(event, "weather")}
              />
              <label
                htmlFor={weatherOption.name}
                className='hover:cursor-pointer'
              >
                {weatherOption.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className='flex gap-10'>
        <legend>Filter by Difficulty</legend>
        <ul className='w-full'>
          {DIFFICULTY_OPTIONS.map((difficultyOption) => (
            <li
              key={difficultyOption.label}
              className='w-full h-8 p-2 flex gap-2 items-center'
            >
              <input
                id={difficultyOption.name}
                name={difficultyOption.name}
                type='checkbox'
                checked={searchParams
                  .getAll("growing_difficulty")
                  .includes(difficultyOption.name)}
                onChange={(event) => hanelCheckboxOnChange(event, "difficulty")}
              />
              <label
                htmlFor={difficultyOption.name}
                className='hover:cursor-pointer'
              >
                {difficultyOption.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
