package com.senuth.portfolio;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping({"/", "/home"})
    public String home() {
        return "index";
    }

    @GetMapping("/download-cv")
    public ResponseEntity<Resource> downloadCv() {
        Resource cv = new ClassPathResource("static/docs/Senuth-Nethwin-CV.pdf");
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=Senuth-Nethwin-CV.pdf")
                .body(cv);
    }
}
