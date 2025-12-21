export const ins = "INSERT";
export const upd = "UPDATE";
export const del = "DELETE";

export const insFunc = (data) => {
  return {
    type: ins,
    payload: data,
  };
};

export const updFunc = (id, data) => {
  return {
    type: upd,
    payload: { id, data },
  };
};

export const delFunc = (id) => {
  return {
    type: del,
    payload: id,
  };
};

// Debug logs for Lalit actions
try {
  console.log("LalitAction loaded:", { ins, upd, del });
  console.log("LalitAction creators:", { insFunc, updFunc, delFunc });
} catch (e) {
  // ignore if executed in non-browser environments during static analysis
}
