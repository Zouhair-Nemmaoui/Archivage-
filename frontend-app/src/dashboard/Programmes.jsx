import React, {useState, useEffect, useRef} from "react";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-select';
import { Helmet } from 'react-helmet';
import '../css/Framework.css';
import '../css/style.css';
import axios from "axios";

export default function Programmes(){
    const[programmes, setProgrammes] = useState([])
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);
    useEffect(()=>{
        fetchProgrammes();
    },[])
   const fetchProgrammes = async()=>{
    await axios.get('http://127.0.0.1:8000/programmes')
    .then(({data})=> {setProgrammes(data)})
   }

   
    useEffect(() => {
        if (tableRef.current && !dataTableRef.current) {
            const table = $(tableRef.current);
            const dataTable = table.DataTable({
                data: programmes,
                columns: [
                    { title: 'titre', data: 'titre' },
                    { title: 'duree', data: 'duree' },
                    { title: 'date', data: 'Date' },
                    { title: 'Numero de support', data: 'Ndesupport' },
                    { title: 'category', data: 'category' },
                    { title: 'technicien', data: 'technicien' },
                    { title: 'Notes', data: 'notes' }
                ],
                dom: 'Bfrtip',
                buttons: [
                    'excel',
                    {
                        text: 'Ajouter',
                        action: function () {
                            // Rediriger vers le formulaire d'ajout
                            window.location.href = "/ajouter";
                        }
                    }
                ],
                initComplete: function () {
                    this.api().columns().every(function () {
                        var column = this;
                        var title = column.header().textContent.trim();
    
                        $(column.footer()).html('<input type="text" placeholder="' + title + '" />');
    
                        $('input', column.footer()).on('keyup change', function () {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                        });
                    });
                }
            });
            dataTableRef.current = dataTable;
        }
    }, [programmes]);
     return (
        <div>
        <Helmet>
                <title>Programmes - Mon Application</title>
            </Helmet>
        <div className="projects p-20 bg-white rad-10 m-20">
            <h2 className="mt-0 mb-20">Table programmes</h2>
            <div className="responsive-table">
                {programmes.length > 0 ? (
                    <table ref={tableRef} id='myTable' className="fs-15 w-full">
                        <thead>
                            <tr>
                                <th>titre</th>
                                <th>duree</th>
                                <th>date</th>
                                <th>Numero de support</th>
                                <th>category</th>
                                <th>technicien</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                { programmes.map((row,key)=>{
                     <tr key={key}>
                                    <td>{row.titre}</td>
                                    <td>{row.duree}</td>
                                    <td>{row.Date}</td>
                                    <td>{row.Ndesupport}</td>
                                    <td>{row.category}</td>
                                    <td>{row.technicien}</td>
                                    <td>{row.notes}</td>
                                </tr>
                }) }
                        </tbody>
                        <tfoot style={{ display: 'table-header-group' }}>
                            <tr>
                                <th>titre</th>
                                <th>duree</th>
                                <th>date</th>
                                <th>Numero de support</th>
                                <th>category</th>
                                <th>technicien</th>
                                <th>Notes</th>
                            </tr>
                        </tfoot>
                    </table>
                ) : (
                    <a href='/ajouter' className='aj' >Ajouter les programmes concepts</a>
              
                )}
            </div>
        </div>
        </div>
    );
}
