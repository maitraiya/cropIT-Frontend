import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css'],
})
export class MyHistoryComponent implements OnInit {
  deals = [];
  selectedDeal;
  modalRef: BsModalRef;
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  constructor(
    private farmerService: FarmerService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.farmerService.getDeals().subscribe((res: any) => {
      this.deals = res;
    });
  }

  onDropDownChange(value) {
    value == 'Completed' ? this.getCompletedList() : this.getPendingList();
  }

  getCompletedList() {}

  getPendingList() {}

  openModal(deal, template: TemplateRef<any>) {
    // deal['invoice'] = true;
    this.selectedDeal = deal;
    this.modalRef = this.modalService.show(template);
  }

  public convetToPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
  }
}
