export interface Theme {
  color: {
    primary: "blue" | "green";
  };
  border: {
    radius: "rounded" | "rounded-2xl";
  };
}

export const defaultThemes: { prototype: Theme; absurd: Theme } = {
  prototype: {
    color: {
      primary: "blue",
    },
    border: {
      radius: "rounded-2xl",
    },
  },
  absurd: {
    color: {
      primary: "green",
    },
    border: {
      radius: "rounded",
    },
  },
};

export interface Classes {
  card: string;
  button: string;
  header: string;
  modal: string;
  sidebar: string;
  link: string;
}

export const classes = {
  button,
  card,
};

export function getClasses(theme: Theme): Classes {
  const vibe: Classes = {
    card: card(theme),
    button: button(theme),
    header: header(theme),
    modal: modal(),
    sidebar: sidebar(theme),
    link: link(),
  };

  return vibe;
}

function sidebar(theme: Theme): string {
  const {
    color: { primary },
  } = theme;

  const borderColor = `border-${primary}-200 hover:border-${primary}-300`;
  const base = "flex flex-col items-center border-r bg-green p-8 w-80";
  return `${base} ${borderColor}`;
}

function header(theme: Theme): string {
  const {
    color: { primary },
  } = theme;

  const borderColor = `border-${primary}-200 hover:border-${primary}-300`;
  const base = "flex items-center justify-between border-b py-8 px-16";
  return `${base} ${borderColor}`;
}

function card(theme: Theme): string {
  const {
    color: { primary },
    border: { radius },
  } = theme;

  const borderColor = `border-${primary}-200 hover:border-${primary}-300`;
  const borderRadius = `${radius} border-${primary}-200 hover:border-${primary}-300`;
  const base = "m-4 overflow-hidden border p-8 shadow-sm bg-white";
  return `${base} ${borderColor} ${borderRadius}`;
}

function modal(): string {
  const base =
    "fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black/30";
  return `${base}`;
}

function link(): string {
  const base = "text-blue-500 hover:text-blue-600 hover:underline";
  return `${base}`;
}

function button(theme: Theme): string {
  const {
    color: { primary },
    border: { radius },
  } = theme;

  const borderColor = `border-${primary}-200 hover:border-${primary}-300`;
  const borderRadius = `${radius} border-${primary}-200 hover:border-${primary}-300`;
  const colors = `bg-${primary}-500 hover:enabled:bg-${primary}-600`;

  const base =
    "flex w-max space-x-1 py-4 px-6 text-white shadow-md hover:enabled:shadow-xl active:enabled:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none";
  return `${base} ${colors} ${borderColor} ${borderRadius}`;
}
