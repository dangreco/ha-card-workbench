export const entitiesDefaults = {
  "sensor.ender_3_v2_current_state": {
    state: "Printing",
  },
  "sensor.ender_3_v2_job_percentage": {
    state: 52.12,
  },
  "sensor.ender_3_v2_actual_tool0_temp": {
    state: 214.7,
    attributes: {
      unit_of_measurement: "°C",
    },
  },
  "sensor.ender_3_v2_actual_bed_temp": {
    state: 65.1,
    attributes: {
      unit_of_measurement: "°C",
    },
  },
  "sensor.ender_3_v2_time_elapsed": {
    state: 37,
  },
  "sensor.ender_3_v2_time_remaining": {
    state: 65,
  },
  "switch.ender": {},
  "switch.light": {
    state: "on",
  },
  "camera.test": {
    attributes: {
      access_token: "ff",
    },
    test: true,
    testUrl: "http://69.51.252.162:8081/?action=stream",
  },
};

export const configDefaults = `type: 'custom:threedy-card'
base_entity: sensor.ender_3_v2
name: Ender 3 v2
temperature_unit: C
printer_type: I3
exact_time: true
monitored:
  - ETA
  - Hotend
  - Bed
  - Elapsed
  - Remaining
`;

export const jsonTreeTheme = {
  scheme: "Material Darker",
  author: "Nate Peterson",
  base00: "#000000",
  base01: "#303030",
  base02: "#353535",
  base03: "#4A4A4A",
  base04: "#B2CCD6",
  base05: "#EEFFFF",
  base06: "#EEFFFF",
  base07: "#FFFFFF",
  base08: "#F07178",
  base09: "#F78C6C",
  base0A: "#FFCB6B",
  base0B: "#C3E88D",
  base0C: "#89DDFF",
  base0D: "#82AAFF",
  base0E: "#C792EA",
  base0F: "#FF5370",
};
