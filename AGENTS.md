# LiveTSM website agent rules

- Canonical requirements are `SITE-SPEC.md` and `SITE-SPEC.json` together in this directory.
- Read both before changing this site.
- Every change to content, facts, structure, behavior, styling rules, assets, documents, or publication must update both canonical files in the same change.
- Markdown is for people and JSON is for AI agents; their meaning must stay identical. Reconcile any conflict before implementation.
- HTML, CSS, JavaScript, archives, deployments, and older versioned specifications are implementations or history, not the source of truth.
- Validate JSON and compare the implementation with both specifications after changes.
- Never claim that LiveTSM already has a certificate. FSTEC decision No. 7553 dated 2025-11-18 is a decision to conduct certification, not a certificate.
- Never infer a fixed mapping between scenario T110/E110/C110, interface CLI/GUI, and form factor USB Type-A/M.2 2230 A+E.
- Preserve CLI as a full administration and operation mode that does not require VGA and is intended for servers, network devices, firewalls, and appliances without local video output.
