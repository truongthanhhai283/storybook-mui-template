import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

import { RefreshIcon } from "@/components/icons";

export default function Home() {
  return (
    <div>
      Home
      <div>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button size="small" startIcon={<RefreshIcon />}>
            Small
          </Button>
          <Button size="medium" startIcon={<RefreshIcon />}>
            Medium
          </Button>
          <Button size="large" startIcon={<RefreshIcon />}>
            Large
          </Button>
        </div>
        <div>
          <Button>Medium</Button>
          <Button color="secondary">Medium</Button>
          <Button color="red">Medium</Button>
          <Button color="gray">Medium</Button>
          <Button variant="brand-outlined">Medium</Button>
        </div>
        <div>
          <Button disabled>Medium</Button>
          <Button color="secondary" disabled>
            Medium
          </Button>
          <Button color="red" disabled>
            Medium
          </Button>
          <Button color="gray" disabled>
            Medium
          </Button>
          <Button variant="brand-outlined" disabled>
            Medium
          </Button>
        </div>
        <div>
          <Button startIcon={<RefreshIcon />}>Medium</Button>
          <Button endIcon={<RefreshIcon />}>Medium</Button>
          <Button color="secondary" startIcon={<RefreshIcon />}>
            Medium
          </Button>
          <Button color="red" startIcon={<RefreshIcon />}>
            Medium
          </Button>
          <Button color="gray" startIcon={<RefreshIcon />}>
            Medium
          </Button>
          <Button variant="brand-outlined" startIcon={<RefreshIcon />}>
            Medium
          </Button>
        </div>
        <br />
        <div>
          <Button>Hello world</Button>
          <Button variant="contained">Hello world</Button>
          <Button variant="outlined">Hello world</Button>
          <Button variant="text">Hello world</Button>
        </div>
        <div>
          <Button color="secondary">Hello world</Button>
          <Button color="secondary" variant="contained">
            Hello world
          </Button>
          <Button color="secondary" variant="outlined">
            Hello world
          </Button>
          <Button color="secondary" variant="text">
            Hello world
          </Button>
        </div>
        <div>
          <Button color="red">Hello world</Button>
          <Button color="red" variant="contained">
            Hello world
          </Button>
          <Button color="red" variant="outlined">
            Hello world
          </Button>
          <Button color="red" variant="text">
            Hello world
          </Button>
        </div>
        <div>
          <ButtonUnstyled>Hello world</ButtonUnstyled>
        </div>
        <div>
          <Checkbox defaultChecked />
        </div>
      </div>
    </div>
  );
}
