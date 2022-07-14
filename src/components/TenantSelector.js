import { useLocalStorage } from "react-use";
import { tenantStorageKey } from "../constants/tenant";

export function TenantSelector({ children }) {
  const [value, setValue] = useLocalStorage(tenantStorageKey, 1, {
    raw: true,
  });

  return (
    <>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="1">First tenant</option>
        <option value="2">Second tenant</option>
      </select>
      <hr />
      {children({ tenant: value })}
    </>
  );
}
