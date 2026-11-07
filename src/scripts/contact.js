const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');
const originalLabel = submitButton.innerHTML;
const selectedProject = new URLSearchParams(window.location.search).get("project");
if (selectedProject === "WodIO") {
  form.elements.message.value = "Hola Iván, me gustaría saber más sobre WodIO.\n\n";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submitButton.disabled || !form.reportValidity()) return;
  status.className = "form-status";
  status.textContent = "Enviando tu mensaje…";
  submitButton.disabled = true;
  submitButton.textContent = "Enviando…";
  form.setAttribute("aria-busy", "true");
  try {
    if (!window.emailjs) throw new Error("Email service unavailable");
    window.emailjs.init("P-MYFtgGFfMP9k_Us");
    await window.emailjs.sendForm("service_n73sae3", "template_7nxd0cn", form);
    status.className = "form-status success";
    status.textContent = "Mensaje enviado correctamente. Gracias por contactar conmigo.";
    form.reset();
    // reset() restores the empty default value, including the project enquiry.
    form.elements.message.value = "";
  } catch {
    status.className = "form-status error";
    status.textContent = "No se ha podido enviar el mensaje. Tu texto se conserva: inténtalo de nuevo o contacta conmigo en LinkedIn.";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalLabel;
    form.removeAttribute("aria-busy");
  }
});
